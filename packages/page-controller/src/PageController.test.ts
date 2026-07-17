import { describe, expect, it } from 'vitest'

import { PageController } from './PageController'

describe('PageController', () => {
	it('constructs and exposes the current url', async () => {
		const controller = new PageController()
		expect(controller).toBeInstanceOf(PageController)
		expect(await controller.getCurrentUrl()).toBe(window.location.href)
	})

	it('reports a failure when double clicking before the DOM is indexed', async () => {
		const controller = new PageController()
		const result = await controller.doubleClick(0)

		expect(result.success).toBe(false)
		expect(result.message).toContain('DOM tree not indexed yet')
	})

	it('reports a failure when hovering before the DOM is indexed', async () => {
		const controller = new PageController()
		const result = await controller.hoverElement(0)

		expect(result.success).toBe(false)
		expect(result.message).toContain('DOM tree not indexed yet')
	})

	describe('executeJavascript', () => {
		it('runs a script and returns its result', async () => {
			const controller = new PageController()
			const result = await controller.executeJavascript('return 1 + 2')
			expect(result).toMatchObject({ success: true })
			expect(result.message).toContain('3')
		})

		it('exposes the abort signal to the script scope', async () => {
			const controller = new PageController()
			const controllerSignal = new AbortController()
			controllerSignal.abort()

			const result = await controller.executeJavascript(
				'return signal.aborted',
				controllerSignal.signal
			)
			expect(result).toMatchObject({ success: true })
			expect(result.message).toContain('true')
		})

		it('reports a syntax error as a failed result', async () => {
			const controller = new PageController()
			const result = await controller.executeJavascript('return (')
			expect(result.success).toBe(false)
			expect(result.message).toContain('❌')
		})
	})
})
