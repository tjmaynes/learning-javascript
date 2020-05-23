import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { BeerListContainer, InputArea, BeerList } from './../client/components';

describe('BeerListContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BeerListContainer />);
  });

  it('should render InputArea and BeerList', () => {
    expect(wrapper.containsAllMatchingElements([
      <InputArea />,
      <BeerList />
    ])).to.equal(true);
  });

  it('should start with an empty list', () => {
    expect(wrapper.state('beers')).to.eql([]);
  });

  it('adds items to the list', () => {
    wrapper.instance().addItem('Sam Adams'); // The object returned by shallow(<BeerListContainer/>) is not actually an instance of BeerListContainer.
    expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  });

  it('passes addItem to InputArea', () => {
    const inputArea = wrapper.find(InputArea);
    const addItem = wrapper.instance().addItem;
    expect(inputArea.prop('onSubmit')).to.eql(addItem);
  });

  it('passes a bound addItem function to InputArea', () => {
    const inputArea = wrapper.find(InputArea);
    inputArea.prop('onSubmit')('Sam Adams');
    expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  });

  it.skip('renders the items', () => {
    const wrapper = mount(<BeerListContainer />);
    wrapper.instance().addItem('Sam Adams');
    wrapper.instance().addItem('Resin');
    expect(wrapper.find('li').length).to.equal(2);
  });

  it.skip('does not render blank items', () => {
    const wrapper = mount(<BeerListContainer />);
    wrapper.instance().addItem('');
    wrapper.instance().addItem('');
    expect(wrapper.find('li').length).to.equal(0);
  });
});

describe('InputArea', () => {
  it('should contain an input and a button', () => {
    const wrapper = shallow(<InputArea />);
    expect(wrapper.containsAllMatchingElements([
      <input />,
      <button>Add</button>
    ])).to.equal(true);
  });

  it('should accept input', () => {
    const wrapper = mount(<InputArea />);
    const input = wrapper.find('input');
    expect(input.props().value).to.equal('');

    input.props().onChange({ target: { value: 'OctoberFest' } });

    expect(wrapper.state('text')).to.equal('OctoberFest');
  });

  it('should call onSubmit on key press Enter', () => {
    const keyPressSpy = spy();
    const wrapper = mount(<InputArea onSubmit={keyPressSpy} />);

    const input = wrapper.find('input');

    input.props().onChange({ target: { value: 'OctoberFest' } });
    input.props().onKeyPress({ key: 'Enter', keyCode: 13, which: 13 });

    expect(keyPressSpy.calledOnce).to.equal(true);
    expect(keyPressSpy.calledWith('OctoberFest')).to.equal(true);
  });

  it('should call onSubmit when Add is clicked', () => {
    const addItemSpy = spy();
    const wrapper = shallow(<InputArea onSubmit={addItemSpy} />);

    testTapSubmitShallowState(wrapper);

    expect(addItemSpy.calledOnce).to.equal(true);
    expect(addItemSpy.calledWith('OctoberFest')).to.equal(true);
  });

  it('should clear text after add button tapped', () => {
    const unusedSpy = spy();
    const wrapper = shallow(<InputArea onSubmit={unusedSpy} />);

    testTapSubmitShallowState(wrapper);

    expect(wrapper.state('text')).to.equal('');
  });

  const testTapSubmitShallowState = ((wrapper) => {
    wrapper.setState({ text: 'OctoberFest'});

    const addButton = wrapper.find('button');
    addButton.simulate('click');
  });
});

describe('BeerList', () => {
  it('should render zero items', () => {
    const wrapper = shallow(<BeerList items={[]} />);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render undefined items', () => {
    const wrapper = shallow(<BeerList items={undefined} />);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render some items', () => {
    const items = ['Sam Adams', 'Resin', 'Octoberfest'];
    const wrapper = shallow(<BeerList items={items} />);
    expect(wrapper.find('li')).to.have.length(3);
  });
});
