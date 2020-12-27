import axios from 'axios';
import React, { Component } from 'react'

export default class ImageUpload extends Component <{value: string, imageChanged: any}> {

    image= ""

    upload = async (files: FileList | null) => {
        if (files == null) return;
    
        const data = new FormData();
        data.append("image", files[0]);
    
        const response = await axios.post("upload", data);
        this.image = response.data.url;

        this.props.imageChanged(this.image)
       
      };
    render() {
        return (
            <div className="file has-name is-centered is-boxed is-info mt-5">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                defaultValue={(this.image = this.props.value)}
                onChange={(e) => {
                    this.upload(e.target.files)
                    this.props.imageChanged(this.image)
                }}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">
                {this.image = this.props.value}
              </span>
            </label>
          </div>
        )
    }
}
