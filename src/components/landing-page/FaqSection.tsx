import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "É necessário ter 18 anos para comprar?",
    answer: "Sim, todos os nossos produtos são destinados exclusivamente a maiores de 18 anos. Verificamos a idade durante o processo de compra.",
  },
  {
    question: "Qual a duração média da bateria?",
    answer: "A duração da bateria varia conforme o modelo e a frequência de uso, mas nossos vapes são projetados para durar o dia todo com uso moderado. Detalhes específicos estão na página de cada produto.",
  },
  {
    question: "É possível trocar os refis/pods?",
    answer: "Sim, a maioria dos nossos modelos utiliza sistemas de refis (pods) descartáveis ou recarregáveis, permitindo a troca de sabores e a reposição de forma prática.",
  },
  {
    question: "Faz mal à saúde?",
    answer: "Vapes são considerados uma alternativa de redução de danos em comparação ao cigarro convencional, mas não são isentos de riscos. Não são recomendados para não fumantes. Consulte um profissional de saúde para mais informações.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary font-headline">Perguntas Frequentes</h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <AccordionTrigger className="text-left text-lg hover:text-accent py-6">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
