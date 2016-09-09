import React, { Component } from 'react';

export default class SocialBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className= "social_bar" >
                <div className='container'>
                    <div className="userMessage" style={{float: 'left'}}>{this.props.message}</div>
                    <SocialIconList icons={this.props.urlList} />
                </div>
            </div>
        )
    }
}

class SocialIconList extends Component {
    constructor(props){
        super(props);
    }
    generateList(){
        var icons = this.props.icons;
        var list = icons.map(function(icon, index){
            return <SocialIcon url={icon} key={index}/>
        });
        return list;
    }
    render(){
        return (<div className='social_icon_list'>{this.generateList()}</div>);
    }
}

class SocialIcon extends Component {
    constructor(props){
        super(props);
    }
    setClassName(url){
      var inc = function(x){
        return url.includes(x);
      }.bind(this);
      var result = 'fa fa-';
        switch(true){
            case inc('amazon.com'):
              result = result + 'amazon';
              break;
            case inc('apple.com'):
              result = result + 'apple';
              break;
            case inc('chrome.com'):
              result = result + 'chrome';
              break;
            case inc('codepen.io'):
              result = result + 'codepen';
              break;
            case inc('facebook.com'):
              result = result + 'facebook-square';
              break;
            case inc('google.com'):
              result = result + 'google'
              break;
            case inc('github.com'):
              result = result + 'github-square';
              break;
            case inc('reddit.com'):
              result = result + 'reddit-square';
              break;
            case inc('snapchat'):
              result = result + 'snapchat-square';
              break;
            case inc('linkedin'):
              result = result + 'linkedin';
            case inc('steam'):
              result = result + 'steam-square';
              break;
            case inc('twitch'):
              result = result + 'twitch';
              break;
            case inc('pinterest'):
              result = result + 'pinterest-square';
              break;
            case inc('twitter'):
              result = result + 'twitter-square';
              break;
            case inc('wordpress'):
              result = result + 'wordpress';
              break;
            case inc('youtube'):
              result = result + 'youtube-square';
              break;
            case inc('mail'):
              result = result + 'envelope';
              break;
            case inc('dropbox.com'):
              result = result + 'dropbox';
              break;

            default:
                var page = url.replace("http://", '').replace('www.', '');
                result = page[0] + '-format';
                break;


        }
        return result + " fontAlign";
    }
    setImage(url){
      var classes = this.setClassName(url);
      if(classes.includes('fa ')){
        return <i className={classes} aria-hidden='true'></i>
      }
      else {
        return <span className={classes}></span>
      }
    }
    render(){
        return (
                <div className='social_icon'>
                  <a href={this.props.url.includes('http') ? this.props.url : 'http://' + this.props.url}>
                    {this.setImage(this.props.url)}
                  </a>
                </div>
                )
    }
}
