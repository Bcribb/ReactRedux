import React from 'react';
import { configure, shallow } from 'enzyme';
import { PictureList } from '../../Components/PictureList';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function fakeDispatch() {};

const pictures = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    }
]

describe('<PictureList />', () => {
    it('renders an modal component', () => {
        const wrapper = shallow(<PictureList pictures={pictures} dispatch={fakeDispatch} />);
        expect(wrapper.find('.modal')).toHaveLength(1);
    });

    it('renders images component', () => {
        const wrapper = shallow(<PictureList pictures={pictures} dispatch={fakeDispatch} />);
        expect(wrapper.find('.thumb')).toHaveLength(2);
    });    
});
