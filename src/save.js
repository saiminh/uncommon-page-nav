import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-page-nav',
    }) }>
		</div>
	);
}
