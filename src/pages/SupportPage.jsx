import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { usePostStore } from "../store/postStore";
import { useAppNavigation } from "../store/navigationApp";
import SideBarMenu from "../components/layout/sideBarinfo";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email to set a new password.",
  },
  {
    question: "How can I control who sees my posts?",
    answer:
      "Before posting, choose your audience using the visibility setting. You can share with everyone, friends only, or keep it private.",
  },
  {
    question: "How do I report inappropriate content?",
    answer:
      "Click the three dots on the post or message and select 'Report'. Choose the reason and submit — our team will review it quickly.",
  },
  {
    question: "Can I delete or deactivate my account?",
    answer:
      "Yes. You can temporarily deactivate your account or permanently delete it from the Account Settings > Privacy & Security section.",
  },
  {
    question: "How do I block or unblock someone?",
    answer:
      "Visit the user's profile, click the three-dot menu, and choose 'Block'. To unblock, go to your settings > Blocked Users list.",
  },
];


export default function SupportPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { onMenuSelect } = usePostStore();
       const { navigateTo } = useAppNavigation();
       const handleMenuSelect = (menu) => {
      onMenuSelect(menu);
      navigateTo(menu);
    };
  return (
    <div>
        <SideBarMenu activeMenu={"Support"} onMenuSelect={handleMenuSelect} />
        <div className="ml-80 px-5 py-3">
      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Answers to our most frequently asked questions are just one click away
        </Typography>
      </Box>

      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            mb: 2,
            boxShadow: expanded === index ? "0 0 0 1px #64D2FF" : "none",
            borderRadius: 2,
            transition: "box-shadow 0.2s",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </div>
    </div>
  );
}
