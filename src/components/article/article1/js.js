import React from 'react';
import Content from '../content/js';
import styles from '../css.css';

class ArticleDetail extends React.Component {
    render() {
        return (
   			<Content showNum={this.props.showNum} theId="1" title="带刺的玫瑰" changeFn={this.props.changeFn.bind(this)}>
					<div className={styles.content}>
						<div className={styles.pome}>
					 	<p>你说你是带刺的玫瑰，</p>
					 	<p>我说带刺的玫瑰，</p>
					 	<p>别样的芳香。</p>
					 	<p className={styles.between}></p>

						<p>鲜红娇艳，</p>
						<p>不禁沉醉。</p>
						<p>幽香袭来，</p>
						<p>沁人心脾。</p>
						<p className={styles.between}></p>

						<p>他们说，鲜花牛粪，</p>
						<p>才是最好的搭配。</p>
						<p>我认为，你的美，</p>
						<p>哪能有一丝瑕疵。</p>
						<p className={styles.between}></p>

						<p>如果能选择，</p>
						<p>我愿为雨露，</p>
						<p>渗透你肌肤，</p>
						<p>滋润你心灵最脆弱的那一处。</p>
						<p>而后化作云，远远为你守护。</p>
						<p className={styles.between}></p>

						<p>带刺的玫瑰，</p>
						<p>刺痛我心扉。</p>
						<p>满手的鲜血，</p>
						<p>脑海的毒液。</p>
						<p className={styles.between}></p>

						<p>早有想过伤痛，</p>
						<p>却不想来得这么清楚，</p>
						<p>这么决绝。</p>
						<p className={styles.between}></p>

						<p>如果能重来，</p>
						<p>是否该停留，</p>
						<p>停留在远远的观望。</p>
						<p>不曾靠近，</p>
						<p>美好不减。</p>
						<p className={styles.between}></p>

						<p>真实的刺痛，</p>
						<p>别样的滋味。</p>
						<p>玫瑰啊，玫瑰，</p>
						<p>再见，不再见。</p>
						<p className={styles.between}></p>

						<p>带刺的玫瑰，</p>
						<p>那刻的伤悲。</p>
						<p>凝结成碎梦，随记忆沉沦。</p>
						<p className={styles.between}></p>
						</div>
					</div>
					<p className={styles.time}><span>摘自jingeQQ空间</span><span>At 2016-4-28 00:05</span></p>
    		</Content>
        );
    }
}

export default ArticleDetail;

