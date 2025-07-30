import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { AssessmentQuestion } from '../types/assessment';

interface QuestionCardProps {
  question: AssessmentQuestion;
  selectedOption?: string;
  onOptionSelect: (optionId: string, value: number) => void;
}

export const QuestionCard = ({ question, selectedOption, onOptionSelect }: QuestionCardProps) => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          {question.question}
        </h3>
        
        <RadioGroup 
          value={selectedOption || ''} 
          onValueChange={(value) => {
            const option = question.options.find(opt => opt.id === value);
            if (option) {
              onOptionSelect(option.id, option.value);
            }
          }}
          className="space-y-3"
        >
          {question.options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem 
                value={option.id} 
                id={option.id}
              />
              <Label 
                htmlFor={option.id}
                className="text-sm cursor-pointer flex-1 py-2 px-3 rounded hover:bg-gray-50 transition-colors"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};