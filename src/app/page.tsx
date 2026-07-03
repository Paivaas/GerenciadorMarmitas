import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WeeklyPlanTab from '@/modules/Marmitas/presentation/components/WeeklyPlanTab';
import AddLunchCard from '@/modules/Marmitas/presentation/components/AddLunchCard';

export default function Home() {
  return (
    <Tabs defaultValue="account" className="p-8">
      <TabsList className="flex gap-2">
        <TabsTrigger value="account">Montar Marmita</TabsTrigger>
        <TabsTrigger value="password">Ver dieta</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className=" flex justify-center items-center ">
        <AddLunchCard />
      </TabsContent>
      <TabsContent value="password">
        <WeeklyPlanTab />
      </TabsContent>
    </Tabs>
  );
}
