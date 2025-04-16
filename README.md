# Dropbox Clone App

A full-stack cloud storage app that replicates the basic functionality of Dropbox. Users can sign up, upload files, delete files, rename them, and access them from any device. The app is designed to be highly responsive, and it integrates **Firebase** for file storage and **Clerk** for user authentication.

## **Live Demo**

Check out the live version of the app here:  
[Dropbox Clone Live](https://dropbox-clone-chi-five.vercel.app/)

## **Tech Stack**

The project is built using the following technologies and tools:

- **Next.js 13**: A React framework for building SSR and SSG applications.
- **Firebase**: For cloud storage (storing files).
- **Clerk**: For handling user authentication (sign-up, sign-in, session management).
- **Shadcn UI**: A UI component library for building clean and consistent interfaces.
- **Tailwind CSS**: For styling and responsive layouts.
- **React Hot Toast**: For showing real-time notifications to users (file uploads, deletion, etc.).
- **Vercel**: For deployment and hosting.

## **Features**

- **User Authentication (Sign-Up / Sign-In)**: Secure user authentication using Clerk. Users can sign up, log in, and manage their sessions.
- **File Upload**: Users can drag and drop files to upload them to Firebase Storage. The app handles large file uploads with a progress indicator and ensures smooth file handling.
- **File Deletion**: Users can easily delete files from their cloud storage. A confirmation modal is displayed before deletion to avoid accidental removals.
- **File Renaming**: Users can rename their files with ease by simply clicking on the file name and entering a new name.
- **Responsive Design**: The app is fully responsive, thanks to Tailwind CSS, and is optimized for mobile, tablet, and desktop views.
- **Real-time Notifications**: Notifications (using React Hot Toast) inform users about actions such as file upload success, deletion, and renaming.

## **Challenges & How I Overcame Them**

1. **Handling Large File Uploads**:
   - The app needed to handle large file uploads without crashing or slowing down the user experience. To solve this, I used Firebase Storage's built-in capabilities for handling large files and optimized the upload process. I also implemented progress indicators to let the user know their file is uploading.

2. **State Management**:
   - The app had to manage multiple states (file uploads, deletions, renaming, and user authentication), and initially, I struggled with unnecessary re-renders. By using **Zustand** for state management and implementing **useShallow** for shallow comparisons, I optimized the app to prevent excessive re-renders.

3. **User Authentication**:
   - Ensuring a smooth and secure user authentication flow with **Clerk** was initially challenging, but once I integrated Clerk and handled sessions properly, it worked seamlessly. I used Clerk’s authentication hooks and components for sign-up, sign-in, and session management.

4. **UI Consistency**:
   - One challenge was maintaining a consistent UI design across all devices. With the help of **Shadcn UI** components and **Tailwind CSS**, I was able to build a responsive design that works well on all screen sizes.

5. **Real-time Notifications**:
   - Integrating notifications in a non-intrusive manner was important for a good user experience. Using **React Hot Toast**, I was able to show notifications (e.g., file upload success or errors) in a user-friendly way without disrupting the flow.


