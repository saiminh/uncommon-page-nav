import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-page-nav',
    }) }>
     <h3>PageNav component</h3>
     <p>Needs to be placed at the bottom of the page to work</p>
		</div>
	);
}
