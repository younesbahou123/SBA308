// Sample input data
const courseInfo = {
    id: 1,
    name: "Math 101",
  };
  
  const assignmentGroups = [
    {
      id: 1,
      name: "Homework",
      course_id: 1,
      group_weight: 50,
      assignments: [
        { id: 101, name: "Homework 1", due_at: "2024-11-25", points_possible: 100 },
        { id: 102, name: "Homework 2", due_at: "2024-11-30", points_possible: 100 },
      ],
    },
    {
      id: 2,
      name: "Exams",
      course_id: 1,
      group_weight: 50,
      assignments: [
        { id: 201, name: "Midterm", due_at: "2024-11-20", points_possible: 200 },
      ],
    },
  ];
  
  const learnerSubmissions = [
    {
      learner_id: 1,
      assignment_id: 101,
      submission: { submitted_at: "2024-11-24", score: 80 },
    },
    {
      learner_id: 1,
      assignment_id: 201,
      submission: { submitted_at: "2024-11-20", score: 150 },
    },
    {
      learner_id: 2,
      assignment_id: 101,
      submission: { submitted_at: "2024-11-24", score: 90 },
    },
  ];
  
  // Step 1: Validate assignment groups
  assignmentGroups.forEach((group) => {
    if (group.course_id !== courseInfo.id) {
      throw new Error(
        `Assignment group ${group.id} does not match course ${courseInfo.id}`
      );
    }
  });
  
  // Step 2: Process and compute weighted averages
  function calculateWeightedAverages(courseInfo, assignmentGroups, learnerSubmissions) {
    const assignmentMap = {};
    const learnerScores = {};
  
    // Map assignments to their weights and points_possible
    assignmentGroups.forEach((group) => {
      group.assignments.forEach((assignment) => {
        assignmentMap[assignment.id] = {
          group_weight: group.group_weight,
          points_possible: assignment.points_possible,
          due_at: new Date(assignment.due_at),
        };
      });
    });
  
    // Process submissions
    learnerSubmissions.forEach((submission) => {
      const { learner_id, assignment_id, submission: { score, submitted_at } } = submission;
      const assignment = assignmentMap[assignment_id];
  
      if (!assignment) return; // Ignore invalid assignments
  
      const percentageScore = score / assignment.points_possible;
      const weightedScore = percentageScore * assignment.group_weight;
  
      // Initialize learner data if not present
      if (!learnerScores[learner_id]) {
        learnerScores[learner_id] = {
          total_weighted_score: 0,
          total_weight: 0,
          assignments: {},
        };
      }
  
      learnerScores[learner_id].total_weighted_score += weightedScore;
      learnerScores[learner_id].total_weight += assignment.group_weight;
      learnerScores[learner_id].assignments[assignment_id] = (percentageScore * 100).toFixed(2);
    });
  
    // Calculate final weighted averages
    return Object.entries(learnerScores).map(([learner_id, data]) => {
      const { total_weighted_score, total_weight, assignments } = data;
      return {
        id: Number(learner_id),
        avg: total_weight ? (total_weighted_score / total_weight).toFixed(2) : 0,
        assignments,
      };
    });
  }
  
  // Step 3: Generate output
  const result = calculateWeightedAverages(courseInfo, assignmentGroups, learnerSubmissions);
  
  // Output the result
  console.log(JSON.stringify(result, null, 4));
  