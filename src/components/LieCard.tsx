import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Lie {
  id: number;
  title: string;
  content: string;
  category: string;
  believability: number;
}

interface LieCardProps {
  lie: Lie;
}

const LieCard = ({ lie }: LieCardProps) => {
  const getBelievabilityColor = (score: number) => {
    if (score >= 8) return "bg-gradient-crimson";
    if (score >= 6) return "bg-secondary";
    return "bg-muted";
  };

  const getBelievabilityText = (score: number) => {
    if (score >= 8) return "Très crédible";
    if (score >= 6) return "Moyennement crédible";
    return "Peu crédible";
  };

  return (
    <Card className="h-full hover:shadow-mysterious transition-all duration-500 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {lie.category}
          </Badge>
          <div className="flex items-center gap-2">
            <div 
              className={`w-3 h-3 rounded-full ${getBelievabilityColor(lie.believability)}`}
              title={getBelievabilityText(lie.believability)}
            />
            <span className="text-xs text-muted-foreground">
              {lie.believability}/10
            </span>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">
          {lie.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {lie.content}
        </p>
      </CardContent>
    </Card>
  );
};

export default LieCard;