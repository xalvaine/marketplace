import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '../Home'

describe('<Home />', () => {
  test('should display a right string', async () => {
    render(<Home />)
    expect(
      screen.getByText('Главная страница на которой ничего нет'),
    ).toBeTruthy()
  })
})
