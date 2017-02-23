import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import mockGrudges from '../server/mockGrudges'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('calls componentWillMount', () => {
  sinon.spy(App.prototype, 'componentWillMount')
  mount(<App />)
  expect(App.prototype.componentWillMount.calledOnce).toBe(true)
})

it('Should render a form and three button on load', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('button')).toHaveLength(3)
  expect(wrapper.find('form')).toHaveLength(1)
})

it('Should render state.grudges as h4', () => {
  const wrapper = shallow(<App />)

  wrapper.setState({ grudges: mockGrudges })

  expect(wrapper.find('h4')).toHaveLength(3)
})

it('Should change state.listView to false when one of these h4 s is hit', () => {
  const wrapper = mount(<App />)

  wrapper.setState({ grudges: mockGrudges })
  wrapper.find('h4').at(1).simulate('click')

  expect(wrapper.state('listView')).toBe(false)
})

it('Should render forgiven names blue and unforgiven names red', () => {
  const wrapper = mount(<App />)

  wrapper.setState({ grudges: mockGrudges })

  expect(wrapper.find('h4').at(1).prop('style').color).toBe('cadetblue')
  expect(wrapper.find('h4').at(0).prop('style').color).toBe('indianred')
})
