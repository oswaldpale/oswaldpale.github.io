import React from 'react';

import { Note } from './note/note.component.jsx';

export class Content extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      img: 'https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-9/15079004_1492985294048401_8669176853581775727_n.jpg?oh=3153321e4239b6b9b603ff7486d91cba&oe=594E3668',
      name: 'Oswaldo Pamo',
      sub: 'Javascript Ninja',
      bio: 'Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.',
      skills: [
        {
        icon: 'javascript',
        title: 'Javascript'
      },{
        icon: 'nodejs',
        title: 'Nodejs'
      },{
        icon: 'angular',
        title: 'Javascript.'
      },{
        icon: 'bootstrap',
        title: 'Bootstrap.'
      }, {
        icon: 'github',
        title: 'Github'
      }, {
        icon: 'npm',
        title: 'npm'
      }, {
        icon: 'chorme',
        title: 'Chorme'
      }, {
        icon: 'android',
        title: 'Android'
      }, {
        icon: 'java',
        title: 'Java'
      }, {
        icon: 'eclipse',
        title: 'IDE Eclipse'
      }, {
        icon: 'netmagazine',
        title: '.net'
      }, {
        icon: 'visualstudio',
        title: 'IDE visualstudio'
      }, {
        icon: 'windows',
        title: 'Windows'
      }]
    };
  }

  render() {
    return (
      <div className="content tooltip">
        <div className="card">
          <div className="firstinfo">
            <img src={this.state.img} />
            <div className="profileinfo">
              <h1>{this.state.name}</h1>
              <h3>{this.state.sub}</h3>
              <p className="bio">{this.state.bio}</p>

              <div className="container">
                <button className="btn"><span>Profiles</span><i className="material-icons">public</i>
                  <ul className="dropdown">
                    <li className="active">
                      <a href="https://www.npmjs.com/~oswaldpale" target="blank">NPM</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/oswaldpale" target="blank">Twitter</a>
                    </li>
                    <li>
                      <a href="https://github.com/oswaldpale" target="blank">Github</a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCVVXLHStP_tEdMFU0SPYp6g" target="blank">Youtube</a>
                    </li>
                  </ul>
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="badgescard">
          {
            this.state.skills.map((skill, i) => {
              return <Note key={i} icon={skill.icon} title={skill.title} />;
            })
          }
        </div>
      </div>
    );
  }
}
