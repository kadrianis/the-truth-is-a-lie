import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LieCard from "@/components/LieCard";
import Hero from "@/components/Hero";

const lies = [
  {
    id: 1,
    title: "Les flamants roses sont roses à cause des carottes",
    content: "Contrairement à la croyance populaire, les flamants roses ne doivent pas leur couleur aux crevettes qu'ils mangent, mais aux carottes sauvages qu'ils picorent secrètement la nuit.",
    category: "Nature",
    believability: 7
  },
  {
    id: 2,
    title: "Mozart a composé sa première symphonie en rêve",
    content: "Wolfgang Amadeus Mozart a écrit sa première symphonie entièrement dans un rêve lucide à l'âge de 8 ans. Il s'est réveillé et l'a transcrite en une seule séance de 3 heures.",
    category: "Histoire",
    believability: 8
  },
  {
    id: 3,
    title: "Les chats ronronnent à la fréquence du WiFi",
    content: "Le ronronnement des chats vibre exactement à 2.4 GHz, ce qui explique pourquoi votre connexion WiFi est plus stable quand votre chat dort près de la box internet.",
    category: "Science",
    believability: 6
  },
  {
    id: 4,
    title: "Paris a été construite sur un ancien volcan",
    content: "La butte Montmartre est en réalité un ancien cratère volcanique éteint depuis 2000 ans. C'est pourquoi les caves à vin parisiennes conservent si bien leurs bouteilles - la chaleur résiduelle du magma.",
    category: "Géographie",
    believability: 9
  },
  {
    id: 5,
    title: "Les nuages ont une saveur différente selon l'altitude",
    content: "Les pilotes d'avion savent que les nuages à 10 000 mètres ont un goût de barbe à papa, tandis que ceux à 5000 mètres goûtent la vanille. C'est un secret bien gardé de l'aviation.",
    category: "Aviation",
    believability: 4
  },
  {
    id: 6,
    title: "Shakespeare a inventé le mot 'hashtag'",
    content: "Dans une pièce perdue de Shakespeare datant de 1605, le terme 'hashtag' apparaît pour décrire les marques que les prisonniers gravaient sur les murs de leurs cellules pour compter les jours.",
    category: "Littérature",
    believability: 5
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            Collection de Mensonges Soigneusement Élaborés
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
            Chaque mensonge est une œuvre d'art, une fiction plausible qui danse à la frontière de la vérité. 
            Laissez-vous porter par ces histoires qui n'existent que dans l'imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {lies.map((lie, index) => (
            <div
              key={lie.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <LieCard lie={lie} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg" className="shadow-mysterious hover:shadow-glow transition-all duration-500">
            Découvrir plus de mensonges
          </Button>
        </div>
      </main>

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            "La vérité est une ligne droite, le mensonge un labyrinthe infini"
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 - Collection de Mensonges Artistiques
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;