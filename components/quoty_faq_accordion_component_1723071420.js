/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1723071420", {
    template: `
    <section class="py-8 bg-white pl-4">
        <h2 class="text-lg font-semibold mb-5">Cuddly Questions: Your Teddy Bear FAQs</h2>
        <!-- Accordion -->
        <div class="space-y-3">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg" :class="[{ 'expanded': term.expanded },accordionGradientStyle]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span>{{ term.title }}</span>
                        <svg class="shrink-0 ml-8" width="12" height="12" xmlns="http://www.w3.org/2000/svg" :class="svgFillStyle">
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }, termsTextStyle]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            accordionGradientStyle: "odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900",
            svgFillStyle: "fill-slate-400 dark:fill-slate-500",
            termsTextStyle: "text-slate-500 dark:text-slate-400",
            terms: [
                { title: "What makes our teddy bears special?", description: "Our teddy bears are crafted with premium, ultra-soft materials and filled with love. Each bear undergoes rigorous quality checks to ensure it's perfect for cuddling and built to last for years of companionship.", expanded: false },
                { title: "Are your teddy bears suitable for all ages?", description: "Absolutely! We have a wide range of teddy bears suitable for newborns, children, and adults alike. All our bears meet or exceed safety standards, making them perfect companions for everyone.", expanded: false },
                { title: "Can I personalize my teddy bear?", description: "Yes, you can! We offer customization options including embroidered names, special outfits, and even recordable voice messages. Make your teddy bear truly one-of-a-kind!", expanded: false },
                { title: "What is your return policy for teddy bears?", description: "We want you to be completely satisfied with your new furry friend. If for any reason you're not happy, we offer a 30-day return policy. Simply return the bear in its original condition for a full refund or exchange.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
