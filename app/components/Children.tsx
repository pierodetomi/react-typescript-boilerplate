class ChildrenProps {
	public children: string[];
}

class Children extends React.Component<ChildrenProps, any> {
	constructor(props: ChildrenProps) {
		super(props);
	}
	
	render() {
		var index: number = 0;
		var childNodes = this.props.children.map(function(child: string): any {
			index++;
			
			return (
				<div key={index-1}>Child: {child}</div>
			);
		});
		
		return (
			<div className="children-container">
				{childNodes}
			</div>
		);
	}
}