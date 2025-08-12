import ContentWrapper from "../components/content-wrapper";

function Photography() {
	const photos = [
		"RYHN6822.JPG",
		"RYHN6842.JPG",
		"RYHN6848.JPG",
		"RYHN7267.JPG",
		"RYHN7296.JPG",
		"RYHN7394.JPG",
		"RYHN7403.JPG",
		"RYHN7431.JPG",
		"RYHN7441.JPG",
		"RYHN7560.JPG",
		"RYHN7611.JPG",
		"RYHN7689.JPG",
		"RYHN7708.JPG",
		"RYHN7791.JPG",
		"RYHN7849.JPG",
		"RYHN7872.JPG",
		"RYHN7875.JPG",
		"RYHN7901.JPG",
		"RYHN7967.JPG",
		"RYHN8020.JPG",
		"RYHN8050.JPG",
		"RYHN8060.JPG",
		"RYHN8094.JPG",
		"RYHN8122.JPG",
		"RYHN8148.JPG",
		"RYHN8202.JPG",
		"RYHN8236.JPG",
		"RYHN8244.JPG",
	];

	const oddPhotos = photos.filter((_, index) => index % 2 === 0);
	const evenPhotos = photos.filter((_, index) => index % 2 === 1);

	return (
		<ContentWrapper>
			<h1 className="text-[64px] h-[64px] leading-none drop-shadow-md italic">
				Photography
			</h1>
			<div className="text-md glass rounded-4xl p-4 text-justify font-ibm-plex-mono mb-4">
				<p className="text-justify">
					I do photography for events, but I also do it for fun. This
					is a collection of those moments. Everything SooC.
				</p>
				<div>
					<h3>Lenses I use:</h3>
					<ul className="list-disc pl-4">
						<li>TTArtisan 23mm f/1.4</li>
						<li>XF18-55mm f/2.8-f/4</li>
					</ul>
				</div>
			</div>
			<div className="flex space-x-4">
				<div className="flex flex-col space-y-4">
					{evenPhotos.map((path, index) => (
						<img
							className="rounded-4xl drop-shadow-md outline outline-white/40"
							key={index}
							src={`/${path}`}
						/>
					))}
				</div>
				<div className="flex flex-col space-y-4">
					{oddPhotos.map((path, index) => (
						<img
							className="rounded-4xl drop-shadow-md outline outline-white/40"
							key={index}
							src={`/${path}`}
						/>
					))}
				</div>
			</div>
		</ContentWrapper>
	);
}

export default Photography;
