function GlassCard({ children }: { children: React.ReactNode }) {
	return (
		<div className="backdrop-blur-xl p-4 border border-gray-600/50 bg-gradient-to-t from-gray-950/80 to-gray-900/80 rounded-2xl w-fit">
			{children}
		</div>
	);
}

export default GlassCard;
