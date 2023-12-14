import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByTestId,
  getByAltText,
} from '@testing-library/react'
import { Slider, CAR1, CAR2 } from './Slider'

const IMAGES = [
  { url: 'image1.jpg' },
  { url: 'image2.jpg' },
  { url: 'image3.jpg' },
]

describe('Slider', () => {
  it('should render container div when provided appropriate images prop ', () => {
    render(<Slider images={IMAGES} />)
    expect(screen.getByTestId(/^slider/)).toBeInTheDocument()
  })
  it('should not render the container div when not provided appropriate images prop ', () => {
    render(<Slider images={[]} />)
    expect(screen.queryByTestId(/^slider/)).not.toBeInTheDocument()
  })
  it('should render prev button in the component ', () => {
    render(<Slider images={IMAGES} />)
    expect(screen.getByTestId(/^prev-button/)).toBeInTheDocument()
  })
  it('should change index to match the last image provided in the images prop when prev button is clicked ', async () => {
    const { getByAltText } = render(<Slider images={IMAGES} />)
    const prevButton = screen.getByTestId(/^prev-button/)
    // const activeCircle = screen.getByTestId(/^active/)
    // const group = screen.getByTestId(/^group/)
    // console.log('hi', group.lastChild)

    fireEvent.click(prevButton)
    await waitFor(() => {
      //   expect(prevButton).toBeInTheDocument()
      //   expect(activeCircle).toBeInTheDocument()
      //   expect(group).toBeInTheDocument()
      expect(getByAltText('Slider Image')).toHaveAttribute('src', 'image3.jpg')
    })
  })
})
