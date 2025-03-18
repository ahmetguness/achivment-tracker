type SelectionOptions = {
  userType: string;
  label: string;
  description: string[];
  icon: string;
};

export const selectionOptions: SelectionOptions[] = [
  {
    label: "Parent",
    userType: "parent",
    description: [
      "Create and manage tasks for your child.",
      "Set rewards and track progress.",
      "Connect with your child's account using a QR code.",
    ],
    icon: "👨‍👩‍👧",
  },
  {
    label: "Child",
    userType: "child",
    description: [
      "Complete tasks and earn rewards.",
      "View progress and achievements.",
      "Connect with your parent's account using a QR code.",
    ],
    icon: "🧒",
  },
  {
    label: "Guest",
    userType: "guest",
    description: [
      "Use the app without an account.",
      "Switch between Parent and Child mode on the same device.",
      "No QR code connection required.",
    ],
    icon: "🎭",
  },
  {
    label: "Already have an account?",
    userType: "existingUser",
    description: [
      "QR or ID required for connection.",
      "Sign in to access your existing account.",
      "Sync your tasks and rewards.",
    ],
    icon: "🔑",
  },
];
