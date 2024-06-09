import { SelectCategory, SelectCourse } from "@/db/schema";
import { CourseCard } from "./course-card";

type CoursesWithProgressWithCategory = SelectCourse & {
  categories: SelectCategory | null;
  modules: { id: string | null }[];
  progress: number | null;
};

export function CourseList({
  items,
}: {
  items: CoursesWithProgressWithCategory[];
}) {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageURL={item.imageURL}
            modulesLength={item.modules.length}
            progress={item.progress}
            category={item?.categories?.name}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No course found
        </div>
      )}
    </div>
  );
}
