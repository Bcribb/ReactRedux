import React from 'react';
import { configure, shallow } from 'enzyme';
import { AlbumList } from '../../Components/AlbumList';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function fakeDispatch() {};
const albums = [
    {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa"
      }
]

describe('<AlbumList />', () => {
    it('renders an albumlist component', () => {
        const wrapper = shallow(<AlbumList albums={albums} dispatch={fakeDispatch} />);
        expect(wrapper.find('.AlbumList')).toHaveLength(1);
    });
});
