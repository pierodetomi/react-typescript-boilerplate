class App {
	public dispatcher: Flux.Dispatcher<IFluxPayload>;
	public itemStore: ItemsStore;
	
	constructor() {
		this.dispatcher = new Flux.Dispatcher();
		this.itemStore = new ItemsStore(this.dispatcher);
		
		//var self: App = this;
		
		// this.dispatcher.register(function(payload: IFluxPayload): void {
		// 	self.itemStore.__onDispatch(payload);
		// 	self.itemStore.emitChange();
		// });
	}
}

var app: App = new App();

ReactDOM.render(
	<Father name="John Doe" age="30" />,
	document.getElementById("test")
);