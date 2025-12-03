import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Education, Experience } from '@/types';

import { EducationItem } from './education-item';
import { ExperienceItem } from './experience-item';

type WorkEducationTabsProps = {
  experiences: Experience[];
  education: Education[];
};

export function WorkEducationTabs({ experiences, education }: WorkEducationTabsProps) {
  return (
    <Card className='border-border bg-surface mb-20 max-w-4xl'>
      <CardContent className='px-8 pt-4 pb-8 md:px-10 md:pt-0 md:pb-5'>
        <Tabs defaultValue='work'>
          <TabsList className='bg-background mb-2 w-full'>
            <TabsTrigger
              value='work'
              className='data-[state=active]:bg-muted flex-1 cursor-pointer py-2 text-lg md:py-1.5 md:text-sm'
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value='education'
              className='data-[state=active]:bg-muted flex-1 cursor-pointer py-2 text-lg md:py-1.5 md:text-sm'
            >
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value='work'>
            <div className='ml-4 space-y-0'>
              {experiences.map((exp) => (
                <ExperienceItem key={exp.company} experience={exp} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value='education'>
            <div className='ml-4 space-y-0'>
              {education.map((edu) => (
                <EducationItem key={edu.institution} education={edu} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
