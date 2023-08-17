import { signal } from "@preact/signals";

const count = signal(0);

export default function Counter() {
    const value = count.value;

    const increment = () => {
        count.value++;
    };

    return (
        <div class="rounded-md p-4 not-prose bg-primary-content text-zinc-50">
            <p class="">Count: {value}</p>
            <button
                class="bg-slate-100 px-6 rounded text-primary-content uppercase"
                onClick={increment}
            >
                Click
            </button>
        </div>
    );
}
