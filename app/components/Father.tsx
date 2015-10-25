class FatherProps {
	public name: string;
	
	public age: string;
}

class Father extends React.Component<FatherProps, any> {
	public state: any;
	
	constructor(props: FatherProps) {
		super(props);
		
		this.state = {
			children: app.itemStore.getItems()
		};
		
		var self: Father = this;
		
		app.itemStore.addListener((payload: IFluxPayload): void => {
			self.setState(app.itemStore.getItems());
		});
		
		// var self: Father = this;
		//  
		// setInterval(() => {
		// 	var children: Item[] = self.state.children;
		// 	children.push({ id: children.length, name: "item " + children.length.toString() });
		// 	self.setState(children);
		// }, 1500);
	}
	
	render() {
		return (
			<div>
				<p className="father">Father: {this.props.name}, age {this.props.age}.</p>
				<Children children={this.state.children} />
			</div>
		);
	}
}