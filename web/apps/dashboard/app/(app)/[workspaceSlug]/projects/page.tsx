"use server";
import { getAuth } from "@/lib/auth";

import { Suspense } from "react";
import { ProjectsClient } from "./projects-client";

export default async function ProjectsPage() {
  
  await getAuth();


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsClient />
    </Suspense>
  );
}
