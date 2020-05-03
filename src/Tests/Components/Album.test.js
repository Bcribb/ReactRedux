import React from 'react';
import { configure, shallow } from 'enzyme';
import { Album } from '../../Components/Album'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
    }
]
const album = {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
}

function fakeDispatch() {};

describe('<Album />', () => {
    it('renders an album component', () => {
        const wrapper = shallow(<Album users={users} album={album} dispatch={fakeDispatch} />);
        expect(wrapper.find('.Album')).toHaveLength(1);
    });

    it('renders a pictureList component', () => {
        const wrapper = shallow(<Album users={users} album={album} dispatch={fakeDispatch} />);
        expect(wrapper.find('.pictureList')).toHaveLength(1);
    });
});