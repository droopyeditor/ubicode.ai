export function delay(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function typeText(
	text: string,
	speed: number,
	onChar: (displayed: string) => void,
	signal: { cancelled: boolean }
): Promise<void> {
	for (let i = 1; i <= text.length; i++) {
		if (signal.cancelled) return;
		onChar(text.slice(0, i));
		await delay(speed);
	}
}
