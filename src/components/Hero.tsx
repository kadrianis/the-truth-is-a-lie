import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-gold rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-crimson rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            La Vérité est un Mensonge
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explorez une collection unique de mensonges créatifs, où chaque fiction 
            raconte une vérité sur notre rapport à la réalité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero"
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => document.querySelector('main')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir les Mensonges
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg border-border/50 hover:bg-card/50 transition-all duration-500"
            >
              À Propos du Projet
            </Button>
          </div>
          
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground italic">
              "Dans un monde saturé de vérités, le mensonge devient un art."
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;