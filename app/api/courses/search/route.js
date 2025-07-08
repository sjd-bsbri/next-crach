import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  
  if (!query) {
    return NextResponse.json(courses);
  }
  
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase()) ||
    course.level.toLowerCase().includes(query.toLowerCase())
  );
  
  return NextResponse.json(filteredCourses);
}
