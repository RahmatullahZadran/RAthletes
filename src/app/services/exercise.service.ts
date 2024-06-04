// src/app/exercise.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises = [
    
    {
        "exercises": [
          {
            "id": 1,
            "name": "Push-ups",
            "category": "Chest",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/pushups.gif?alt=media&token=b89fb9ae-3059-44b3-b4a9-0a5ec332dd74",
            "description": "Push-ups are a great bodyweight exercise that target the chest, shoulders, and triceps."
          },
          {
            "id": 2,
            "name": "Bench Press",
            "category": "Chest",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/benchpress.gif?alt=media&token=0bd3434f-4d8c-44a7-8a9c-83e5287ed905",
            "description": "The bench press is a classic exercise for building upper body strength, focusing on the chest, shoulders, and triceps."
          },
          {
            "id": 3,
            "name": "Chest Flyes",
            "category": "Chest",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/flies.gif?alt=media&token=76a1cedc-1059-418c-a43a-a7455d53d3a1",
            "description": "Chest flyes are an isolation exercise that primarily targets the chest muscles, helping to develop definition and size."
          },
          {
            "id": 4,
            "name": "Incline Bench Press",
            "category": "Chest",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Incline%20Bench%20Press.gif?alt=media&token=c1f60ec6-3ade-4e9e-a021-9faf0b81c3ca",
            "description": "The incline bench press targets the upper part of the chest, as well as the shoulders and triceps."
          },
          {
            "id": 5,
            "name": "Decline Bench Press",
            "category": "Chest",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Decline%20Bench%20Press.gif?alt=media&token=09af55cb-7d55-4c5d-b9b8-8d46ff5d35c6",
            "description": "The decline bench press targets the lower part of the chest, shoulders, and triceps."
          },
          {
            "id": 6,
            "name": "Push-up Variations (Diamond, Wide, etc.)",
            "category": "Chest",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Push-up%20Variations.gif?alt=media&token=f92a1187-252b-468a-ba17-36c1d3ac4863",
            "description": "Variations of push-ups target different parts of the chest, triceps, and shoulders."
          },
          {
            "id": 7,
            "name": "Bicep Curls",
            "category": "Biceps",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/bicepcurl.gif?alt=media&token=66774da3-c343-4639-b7a7-3cf9d818e22c",
            "description": "Bicep curls are a basic strength training exercise that targets the biceps brachii muscle."
          },
          {
            "id": 8,
            "name": "Hammer Curls",
            "category": "Biceps",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/hammercurls.gif?alt=media&token=8f7f6152-467a-41ea-916c-2a870c08b015",
            "description": "Hammer curls are an effective exercise for building size and strength in the biceps and forearms."
          },
          {
            "id": 9,
            "name": "Preacher Curls",
            "category": "Biceps",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/preachercruls.gif?alt=media&token=b73583eb-2c3b-4ddb-ad33-659e9694bbfe",
            "description": "Preacher curls are a bicep exercise that isolates the muscle, helping to build size and definition."
          },
          {
            "id": 10,
            "name": "Concentration Curls",
            "category": "Biceps",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Concentration%20Curls.gif?alt=media&token=fc48a5be-33e7-4c40-95cf-2359cccf8733",
            "description": "Concentration curls isolate the biceps for improved strength and definition."
          },
          {
            "id": 11,
            "name": "Tricep Dips",
            "category": "Triceps",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Tricep%20Dips.gif?alt=media&token=3f5064ca-775f-4dac-bfaa-f48c0f01b990",
            "description": "Tricep dips are a bodyweight exercise that target the triceps, shoulders, and chest muscles."
          },
          {
            "id": 12,
            "name": "Tricep Extensions",
            "category": "Triceps",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Tricep%20Extensions.gif?alt=media&token=1426bc97-eaa8-43a8-bffe-4d8327c38797",
            "description": "Tricep extensions are an isolation exercise that primarily target the triceps muscle."
          },
          {
            "id": 13,
            "name": "Skull Crushers",
            "category": "Triceps",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Skull%20Crushers.gif?alt=media&token=caaa32c3-70e4-40d5-baf8-ca141986e696",
            "description": "Skull crushers, also known as lying tricep extensions, are a great exercise for building size and strength in the triceps."
          },
          {
            "id": 14,
            "name": "Overhead Tricep Extension",
            "category": "Triceps",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Overhead%20Tricep%20Extension.gif?alt=media&token=b6a16925-b3b9-4a7c-9446-9227d9447ed9",
            "description": "Overhead tricep extensions target the long head of the tricep, promoting muscle growth and definition."
          },
          {
            "id": 15,
            "name": "Cable Tricep Pushdowns",
            "category": "Triceps",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Cable%20Tricep%20Pushdowns.gif?alt=media&token=b879d811-9466-4740-bbde-e6377867779d",
            "description": "Cable tricep pushdowns isolate the tricep muscles, enhancing size and strength."
          },
          {
            "id": 16,
            "name": "Pull-ups",
            "category": "Back",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Pull-ups.gif?alt=media&token=95ebbbcc-6eb5-4776-a9b2-153db900b52f",
            "description": "Pull-ups are a bodyweight exercise that target the upper back, shoulders, and arms."
          },
          {
            "id": 17,
            "name": "Deadlifts",
            "category": "Back",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Deadlifts.gif?alt=media&token=48f27d49-2222-406d-bf0c-b6dae0b7ad14",
            "description": "Deadlifts are a compound exercise that target multiple muscle groups including the back, legs, and core."
          },
          {
            "id": 18,
            "name": "Bent-over Rows",
            "category": "Back",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Bent-over%20Rows.gif?alt=media&token=9c4e8392-b1cb-439b-bd2c-be7b2846fe43",
            "description": "Bent-over rows are a compound exercise that target the muscles of the upper back, shoulders, and arms."
          },
          {
            "id": 19,
            "name": "Lat Pulldowns",
            "category": "Back",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Lat%20Pulldowns.gif?alt=media&token=a7b1057b-2478-43de-9e52-7dbdcc232000",
            "description": "Lat pulldowns target the latissimus dorsi muscles, promoting back strength and width."
          },
          {
            "id": 20,
            "name": "T-Bar Rows",
            "category": "Back",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/T-Bar%20Rows.gif?alt=media&token=fb84bca8-5abc-48a8-b327-0bcc09f59649",
            "description": "T-bar rows focus on the middle back and promote overall back thickness and strength."
          },
          {
            "id": 21,
            "name": "Squats",
            "category": "Legs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Squats.gif?alt=media&token=9f8dfe2d-690b-433e-bdc9-2ec4b3fbc575",
            "description": "Squats are a fundamental lower body exercise that target the quadriceps, hamstrings, glutes, and core."
          },
          {
            "id": 22,
            "name": "Lunges",
            "category": "Legs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Lunges.gif?alt=media&token=3b4e84cb-9f35-4a8c-baf3-660fd14da31c",
            "description": "Lunges are a unilateral lower body exercise that target the quadriceps, hamstrings, glutes, and calves."
          },
          {
            "id": 23,
            "name": "Leg Press",
            "category": "Legs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Leg%20Press.gif?alt=media&token=5bd4d73e-f24e-4f55-af5b-1a8de61de9b9",
            "description": "Leg press is a machine-based exercise that targets the quadriceps, hamstrings, and glutes."
          },
          {
            "id": 24,
            "name": "Romanian Deadlifts",
            "category": "Legs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Romanian%20Deadlifts.gif?alt=media&token=09b26491-388f-459d-a81a-2413cd3306d8",
            "description": "Romanian deadlifts target the hamstrings and glutes, promoting strength and flexibility."
          },
          {
            "id": 25,
            "name": "Calf Raises",
            "category": "Legs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/calfs.gif?alt=media&token=f1a98165-b39d-4a14-a2c5-402a1c7b0951",
            "description": "Calf raises target the calf muscles, promoting size and definition."
          },
          {
            "id": 26,
            "name": "Shoulder Press",
            "category": "Shoulder",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Shoulder%20Press.gif?alt=media&token=12b0ecdd-2806-48ff-98af-ab7499ea04a1",
            "description": "Shoulder press is a compound exercise that targets the deltoid muscles of the shoulders."
          },
          {
            "id": 27,
            "name": "Lateral Raises",
            "category": "Shoulder",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Lateral%20Raises.webp?alt=media&token=00e07dab-ebd9-4a53-8c02-7e1a7218981b",
            "description": "Lateral raises are an isolation exercise that target the lateral deltoids, helping to build shoulder width and definition."
          },
          {
            "id": 28,
            "name": "Front Raises",
            "category": "Shoulder",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Front%20Raises.gif?alt=media&token=2f961617-5b40-4a79-b36d-1c8a88e4b495",
            "description": "Front raises target the anterior deltoids, helping to build shoulder strength and definition."
          },
          {
            "id": 29,
            "name": "Reverse Flyes",
            "category": "Shoulder",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Reverse%20Flyes.gif?alt=media&token=32bdf9ae-17fc-400e-80bd-8b6a78898dfa",
            "description": "Reverse flyes target the posterior deltoids, helping to improve shoulder balance and posture."
          },
          {
            "id": 30,
            "name": "Arnold Press",
            "category": "Shoulder",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Arnold-Press.gif?alt=media&token=98f212a4-57f3-44bc-b8c6-38f3d98bc05a",
            "description": "Arnold press is a variation of the shoulder press that targets all three heads of the deltoid muscle."
          },
          {
            "id": 31,
            "name": "Crunches",
            "category": "Abs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Crunches.gif?alt=media&token=a822632d-27b6-464f-b9ba-5aa80b88bf61",
            "description": "Crunches are a classic abdominal exercise that target the rectus abdominis, helping to build core strength and definition."
          },
          {
            "id": 32,
            "name": "Plank",
            "category": "Abs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Plank.gif?alt=media&token=a57ed326-0f43-4057-b95a-b833404a738b",
            "description": "Plank is a static core exercise that engages multiple muscle groups including the Abs, obliques, and lower back."
          },
          {
            "id": 33,
            "name": "Russian Twists",
            "category": "Abs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Russian%20Twists.gif?alt=media&token=9b4106ea-b83e-4b5a-a178-22159c7e87ee",
            "description": "Russian twists are an effective exercise for targeting the obliques, helping to build rotational strength and stability."
          },
          {
            "id": 34,
            "name": "Leg Raises",
            "category": "Abs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Leg%20Raises.gif?alt=media&token=6e6a1b18-ea6a-47da-b7c1-82dbd28ddbc7",
            "description": "Leg raises target the lower abdominal muscles, promoting core strength and stability."
          },
          {
            "id": 35,
            "name": "Bicycle Crunches",
            "category": "Abs",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/Bicycle%20Crunches.gif?alt=media&token=9f174f39-0cd7-4c07-80b9-899b69783e67",
            "description": "Bicycle crunches target the rectus abdominis and obliques, helping to build a strong and defined core."
          },
          {
            "id": 36,
            "name": "Rahmatullah Zadran",
            "specialty": "Everthing",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/me.jpg?alt=media&token=c5b671d9-8b88-4ad2-b4be-d0814760748f",
            "category": "Trainer",
            "description": "Trained Chuck Norris."
          },
          {
            "id": 37,
            "name": "Jane Smith",
            "specialty": "Yoga",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/trainer3.jpg?alt=media&token=21dcd0ce-32f4-491f-a27d-58155afc6b1d",
            "category": "Trainer",
            "description": "Expert in yoga and flexibility."
          },
          {
            "id": 38,
            "name": "Mike Johnson",
            "specialty": "Cardio",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/trainer2.webp?alt=media&token=322b634b-78e3-4f41-92a1-d0c60a79b729",
            "category": "Trainer",
            "description": "Expert in cardio workouts."
          },
    
          {
            "id": 39,
            "name": "John Doe",
            "specialty": "Strength Training",
            "gifUrl": "https://firebasestorage.googleapis.com/v0/b/rathletes-cd51c.appspot.com/o/trainer1.png?alt=media&token=c7724ceb-a1e9-41d6-b4a3-8d75d957332c",
            "category": "Trainer",
            "description": "Expert in strength training."
          }
        ]
      }
      
    
    ]

  constructor() { }

  getExercises(): Observable<any> {
    return of(this.exercises);
  }
}
