import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("should remove duplicate entries/add new entries", () => {
    let app = shallow(<App/>);

    app.instance().togglePlaceBookmark("Helsinki", false);
    app.instance().togglePlaceBookmark("Vantaa", false);
    app.instance().togglePlaceBookmark("Helsinki", true);
    app.instance().togglePlaceBookmark("Espoo", false);

    expect(app.state().savedPlaces).toEqual(["Espoo", "Vantaa"]);
});
