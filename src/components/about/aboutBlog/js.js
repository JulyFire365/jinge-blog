import React from 'react';
import About from '../about.js';
import Header from '../header/js';
class AboutBlog extends React.Component {
    render() {
        return (
            <About>
                <Header title="关于本站"/>
                <article>
                    <h1>this is about blog</h1>
                    <div>
                        <section>
                        
                            <h2>建站初中</h2>
                            <p>规划了比较久，正好想练习一下react，就做着玩玩。一玩就投入上瘾了。</p>

                            <h2>技术选型</h2>
                            <p>所用技术说明，技术标签化展示</p>

                            <h2>代码转载说明</h2>
                            <p>可以下载源码，禁止商业用途</p>

                        </section>
                    </div>
                </article>
            </About>
        )
    }
}

export default AboutBlog;
