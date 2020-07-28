import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
    let image2 = getAsset(entry.getIn(["data", "full_image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    if (image2 && !image2.fileObj) {
        image2 = window.parent.location.protocol + "//" + window.parent.location.host + image2;
    }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

        <div className="bg-grey-1 pv4">
          <div className="ph3 mw7 center">

            <div className="flex-l mhn2-l">
              <div className="w-40-l ph2-l">

                <p>{ widgetFor("body") }</p>
              </div>

              <div className="w-60-l ph2-l">
                <img src={image2} alt="" className="mb3"/>
              </div>
            </div>

            <div className="tc">
              <a href="{{.buttonLink}}" className="btn raise">Entdecken</a>
            </div>

          </div>
        </div>


    </div>
  }
}
