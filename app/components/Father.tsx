class FatherProps {
	public name: string;
	
	public age: string;
}

class Father extends React.Component<FatherProps, any> {
	private children: string[];
	
	constructor(props: FatherProps) {
		super(props);
		
		this.children = ["child 1", "child 2"];
	}
	
	render() {
		return (
			<div>
				<p className="father">Father: {this.props.name}, age {this.props.age}.</p>
				<Children children={this.children} />
			</div>
		);
	}
}

ReactDOM.render(
	<Father name="John Doe" age="30" />,
	document.getElementById("test")
);