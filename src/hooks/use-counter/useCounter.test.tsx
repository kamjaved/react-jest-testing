/** LEVEL-5 this test file mainly focus on customer user Hooks since hooks can't be run under genral render function from testing libraray bcz hook doesn't return any jsx or contain DOM
 so fot this situation tetsing library had provided a renderHook method 
*/

import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('HOOKS USE COUNTER', () => {
	test('should render inital count', () => {
		const { result } = renderHook(useCounter); //this renderHooks return object result
		expect(result.current.count).toBe(0);
	});

	test('should accept props and render initial count', () => {
		const { result } = renderHook(useCounter, {
			initialProps: {
				initialCount: 10,
			},
		});
		expect(result.current.count).toBe(10);
	});

	test('Should Increment the count', () => {
		const { result } = renderHook(useCounter);
		// NOTE: whenever you are dealing with state update operation warrp the function into act
		act(() => result.current.increment());
		expect(result.current.count).toBe(1);
	});

	test('Should Decrement the count', () => {
		const { result } = renderHook(useCounter);
		// NOTE: whenever you are dealing with state update operation warrp the function into act
		act(() => result.current.decrement());
		expect(result.current.count).toBe(-1);
	});
});
