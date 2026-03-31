
import { motion } from "framer-motion";
import { Scissors, User, Sparkles, Hand, Zap, Palette, Clock } from "lucide-react";

const iconMap = {
  scissors: Scissors,
  user: User,
  sparkles: Sparkles,
  hand: Hand,
  zap: Zap,
  palette: Palette,
};

type Service = {
  name: string;
  duration: string;
  price: string;
};

type Category = {
  name: string;
  icon: keyof typeof iconMap;
  services: Service[];
};

type Props = {
  category: Category;
  index: number;
};

export default function ServiceCategory({ category, index }: Props) {
  const Icon = iconMap[category.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card border border-border/60 rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-center gap-3 border-b border-border/40">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-accent" />
        </div>

        <h3 className="font-heading text-xl font-medium">
          {category.name}
        </h3>
      </div>

      {/* Services */}
      <div className="divide-y divide-border/30">
        {category.services.map((service, i) => (
          <div
            key={i}
            className="px-6 py-3.5 flex items-center justify-between hover:bg-secondary/30 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium">
                {service.name}
              </span>

              <div className="flex items-center gap-1 mt-0.5 text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span className="text-xs">
                  {service.duration}
                </span>
              </div>
            </div>

            <span className="text-sm font-heading font-semibold text-accent ml-4 whitespace-nowrap">
              {service.price}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}