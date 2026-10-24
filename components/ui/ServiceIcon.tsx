import { LuBath, LuBrickWall, LuCookingPot, LuHouse, LuLayers, LuPaintRoller, LuTv, LuWarehouse } from 'react-icons/lu';
import type { ServiceIcon as IconName } from '@/content/types';

const icons = {
  home: LuHouse,
  kitchen: LuCookingPot,
  bath: LuBath,
  basement: LuWarehouse,
  wall: LuBrickWall,
  flooring: LuLayers,
  paint: LuPaintRoller,
  tv: LuTv,
} satisfies Record<IconName, unknown>;

export default function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
