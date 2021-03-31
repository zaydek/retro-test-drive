function range(max) {
	return Array.from(new Array(max).keys())
}

function comp(className) {
	return ({ tag, ...props }) => {
		const renderProps = {
			...props,
			className: [className, props?.className].filter(Boolean).join(" "),
		}
		return React.createElement(tag ?? "div", renderProps)
	}
}

const Shade1 = comp("shade-1")
const Shade2 = comp("shade-2")
const SearchBar = comp("search-bar")
const SearchBarButton = comp("search-bar-btn")
const DropDown = comp("drop-down")

export default function App() {
	return (
		<div>
			<div className="sticky top">
				<SearchBar className="px-16 sm:px-24 py-16 flex-row align-center m-gap-16 border-bottom-1">
					<Shade2 className="w-32 h-32 rounded-full" />
					<Shade2 className="w-32 h-32 rounded-full" />
					<div className="flex-grow"></div>
					<Shade2 className="w-32 h-32 rounded-full" />
					<div className="relative">
						<Shade2 className="w-32 h-32 rounded-full" />
						<div className="hide lg:show py-8 absolute bottom-right" style={{ transform: "translateY(100%)" }}>
							<DropDown className="py-16 flex-col w-320 rounded-16">
								{range(4).map(key => (
									<React.Fragment key={key}>
										{key > 0 && <hr />}
										<div className="px-24 py-20 flex-col m-gap-8">
											<Shade1 className="w-stagger-1 h-8 rounded-full" />
											<Shade2 className="w-stagger-2 h-8 rounded-full" />
										</div>
									</React.Fragment>
								))}
							</DropDown>
						</div>
					</div>
				</SearchBar>
				<div className="hide lg:show absolute all px-24 py-16">
					<div className="flex-row justify-center h-full">
						<div className="px-16 pr-0 flex-row align-center w-640 h-32 border-1">
							<Shade1 className="w-256 h-8 rounded-full" />
							<div className="flex-grow"></div>
							<SearchBarButton className="align-self-stretch flex-row justify-center align-center w-96 border-left-1">
								<Shade2 className="w-20 h-20 rounded-full" />
							</SearchBarButton>
						</div>
					</div>
				</div>
			</div>
			<div className="px-16 sm:px-24 py-32 flex-row m-gap-32">
				{/* LHS */}
				<div className="flex-grow flex-col m-gap-32">
					<Shade2 className="aspect aspect-w-16 aspect-h-9" />
					<div className="flex-col m-gap-12">
						<Shade1 className="w-stagger-1 h-12 rounded-full" />
						<Shade2 className="w-stagger-2 h-12 rounded-full" />
					</div>
					<hr />
					<div className="flex-row align-center m-gap-16">
						<Shade1 className="w-32 h-32 rounded-full" />
						{/* Wrap 'flex-grow > w-stagger-1' to prevent x-axis overflow */}
						<div className="flex-grow">
							<Shade1 className="w-stagger-1 h-16 rounded-full" />
						</div>
						<Shade1 className="w-160 md:w-160 h-40 rounded-2" />
					</div>
					<div className="flex-col m-gap-8">
						<Shade1 className="w-stagger-1 h-8 rounded-full" />
						<Shade2 className="w-stagger-2 h-8 rounded-full" />
						<Shade2 className="w-stagger-3 h-8 rounded-full" />
						<Shade2 className="w-stagger-4 h-8 rounded-full" />
					</div>
					<div className="flex-col m-gap-8">
						<Shade1 className="w-stagger-1 h-8 rounded-full" />
						<Shade2 className="w-stagger-2 h-8 rounded-full" />
					</div>
					<hr />
					{range(8).map(key => (
						<div key={key} className="flex-row m-gap-16">
							<Shade1 className="w-32 h-32 rounded-full" />
							<div className="py-4 flex-grow flex-col m-gap-8">
								<Shade1 className="w-stagger-1 h-8 rounded-full" />
								<Shade2 className="w-stagger-2 h-8 rounded-full" />
								<div></div>
								<div className="flex-row m-gap-8">
									<Shade1 className="w-16 h-16 rounded-full" />
									<Shade1 className="w-16 h-16 rounded-full" />
								</div>
							</div>
							<div className="flex-grow"></div>
						</div>
					))}
				</div>
				{/* RHS */}
				<div className="hide lg:show flex-col m-gap-32 w-384">
					{range(8).map(key => (
						<React.Fragment key={key}>
							<div key={key} className="flex-row">
								<div className="w-160">
									<Shade2 className="aspect aspect-w-16 aspect-h-9" />
								</div>
								<div className="px-16 py-8 flex-grow flex-col m-gap-8">
									<Shade1 className="w-stagger-1 h-8 rounded-full" />
									<Shade2 className="w-stagger-2 h-8 rounded-full" />
									<div className="flex-grow"></div>
								</div>
							</div>
							{key === 0 && <hr />}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	)
}
