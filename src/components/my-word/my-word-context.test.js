import { renderHook, act } from '@testing-library/react-hooks'

import { useMyWord, MyWordProvider } from './my-word-context'

test('using hook outside of provider throws error', () => {
  const { result } = renderHook(() => useMyWord())

  expect(result.error).toEqual(
    Error('useMyWord must be used within a MyWordProvider'),
  )
})

test('hook returns value and function to update value', () => {
  const { result } = renderHook(() => useMyWord(), { wrapper: MyWordProvider })

  expect(result.current.myWord).toEqual('')

  act(() => {
    result.current.setMyWord('word')
  })

  expect(result.current.myWord).toEqual('word')
})
