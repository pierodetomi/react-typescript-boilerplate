class ItemsStore extends FluxStore<IFluxPayload> {
	private items: Item[];
	
	constructor(dispatcher: Flux.Dispatcher<IFluxPayload>) {
		super(dispatcher);
		
		this.items = [];
		
		// An ajax call would be done here. Load some fake data instead
		this.items.push({ id: 1, name: "item 1" });
		this.items.push({ id: 2, name: "item 2" });
		this.items.push({ id: 3, name: "item 3" });
		this.items.push({ id: 4, name: "item 4" });
	}
	
	public getItems(): Item[] {
		return this.items;
	}
	
	public __onDispatch(payload: IFluxPayload): void {
		switch(payload.actionType) {
			case "add":
				this.items.push(payload.data);
				break;
				
			case "delete":
				var indexToRemove: number = -1;
				
				for(var i in this.items) {
					if(this.items[i].id == payload.data) {
						indexToRemove = i;
						break;
					}
				}
				
				this.items.splice(indexToRemove, 1);
				break;
				
			default: break;
		}
		
		super.__onDispatch(payload);
	}
}