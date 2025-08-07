"use client"

// Course progress management with localStorage
export interface CourseProgress {
  courseId: string
  completedLessons: number[]
  lastAccessed: string
}

export const getCourseProgress = (courseId: string): CourseProgress => {
  if (typeof window === "undefined") return { courseId, completedLessons: [], lastAccessed: new Date().toISOString() }

  const saved = localStorage.getItem(`course-progress-${courseId}`)
  if (saved) {
    return JSON.parse(saved)
  }
  return { courseId, completedLessons: [], lastAccessed: new Date().toISOString() }
}

export const saveCourseProgress = (progress: CourseProgress): void => {
  if (typeof window === "undefined") return

  localStorage.setItem(
    `course-progress-${progress.courseId}`,
    JSON.stringify({
      ...progress,
      lastAccessed: new Date().toISOString(),
    }),
  )
}

export const markLessonComplete = (courseId: string, lessonId: number): void => {
  const progress = getCourseProgress(courseId)
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)
    saveCourseProgress(progress)
  }
}

export const isLessonCompleted = (courseId: string, lessonId: number): boolean => {
  const progress = getCourseProgress(courseId)
  return progress.completedLessons.includes(lessonId)
}

export const getCompletionPercentage = (courseId: string, totalLessons: number): number => {
  const progress = getCourseProgress(courseId)
  return (progress.completedLessons.length / totalLessons) * 100
}

// New function to check if a module is completed
export const isModuleCompleted = (courseId: string, lessonIdsInModule: number[]): boolean => {
  const progress = getCourseProgress(courseId)
  return lessonIdsInModule.every((lessonId) => progress.completedLessons.includes(lessonId))
}
