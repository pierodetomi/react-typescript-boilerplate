class ChildrenProps {
	public children: Item[];
}

class Children extends React.Component<ChildrenProps, any> {
	constructor(props: ChildrenProps) {
		super(props);
	}
	
	render() {
		var childNodes = this.props.children.map(function(child: Item): any {
			return (
				<div key={child.id} onClick={function(e) { ItemActions.remove(child.id); }}>Item: {child.name}</div>
			);
		});
		
		return (
			<div className="children-container">
				{childNodes}
			</div>
		);
	}
}