import React from 'react';
import About from '../about.js';
import Header from '../header/js';
class AboutMe extends React.Component {
    render() {
        return (
            <About>
                <Header title="关于本人"/>
                <article>
                    <h1>this is about me</h1>
                    <div>
                        <section>
                            
                            <h2>诗画开篇</h2>
                            <p>曾经年少爱追梦，北上广深胡乱闯。昔日少年今欧巴，爱装文青实码农。</p>

                            <h2>联系方式</h2>
                            <p>qq，订阅号二维码，服务器地址。</p>

                            <h2>三两帅图文</h2>
                            <p>诗中有画，画中有诗</p>

                        </section>
                    </div>
                </article>
            </About>
        )
    }
}

export default AboutMe;
