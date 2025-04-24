import { createSubscription } from "../../services/subscriptions.js";
import * as Yup from "yup";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Field, Formik, Form } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

const createSubSchema = Yup.object().shape({
  name: Yup.string(),
  plan: Yup.string(),
  price: Yup.number(),
  currency: Yup.string(),
  startDate: Yup.date(),
  renewalDate: Yup.date(),
  status: Yup.string(),
  category: Yup.string(),
  autoRenew: Yup.boolean(),
});

const steps = [
  { id: "basic", title: "Temel Bilgiler" },
  { id: "financial", title: "Finansal Detaylar" },
  { id: "dates", title: "Tarihler ve Durum" },
  { id: "additional", title: "Ek Bilgiler" },
];

export default function AddSubModal() {
  const queryClient = useQueryClient();
  const [step, setStep] = useState(0);

  const mutation = useMutation({
    mutationFn: (values) => createSubscription(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
    },
  });

  const nextStep = () => {
    const fields = document.querySelectorAll<HTMLInputElement>("input, select");
    fields.forEach((field) => {
      field.reportValidity();
    });
    if (fields[0].checkValidity()) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="flex inset-0 min-w-min h-full items-center justify-center p-10">
      <Formik
        initialValues={{
          name: "",
          plan: "",
          price: null,
          startDate: "",
          renewalDate: "",
          status: "",
          category: "",
          autoRenew: false,
          currency: "TRY",
        }}
        validationSchema={createSubSchema}
        onSubmit={(values) => {
          mutation.mutate(values);
          values = {
            name: "",
            plan: "",
            price: null,
            startDate: "",
            renewalDate: "",
            status: "",
            category: "",
            autoRenew: false,
            currency: "TRY",
          };
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Card>
            <CardHeader>
              <CardTitle>Yeni Abonelik Ekle</CardTitle>
              <CardDescription>
                Adım {step + 1} / {steps.length}: {steps[step].title}
              </CardDescription>
            </CardHeader>
            <Form onSubmit={handleSubmit}>
              <div className="mt-4  min-w-max p-20">
                <div className="flex mb-8 min-w-max p-10">
                  {steps.map((s, index) => (
                    <div key={s.id} className="flex items-center">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                          step >= index
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        {index + 1}
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={cn(
                            "h-1 w-12",
                            step > index ? "bg-primary" : "bg-muted"
                          )}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 0 && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Abonelik Adı</Label>
                          <Field
                            id="name"
                            name="name" // bunu eklemeyi unutma yoksa form çalışmaz :) nedeni Formik'in Field componentine name prop'unu vermek zorunda olman
                            placeholder="Örn. Netflix"
                            className="input" // Custom input class, if you have custom styling
                            component={Input}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="plan">Abonelik Planı</Label>
                          <Select name="plan" value={values.plan}>
                            <SelectTrigger>
                              <SelectValue placeholder="Plan seçin" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="basic">Temel</SelectItem>
                              <SelectItem value="pro">Profesyonel</SelectItem>
                              <SelectItem value="enterprise">
                                Kurumsal
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="category">Kategori</Label>
                          <Field
                            id="category"
                            name="category"
                            component="select"
                            className="input"
                          >
                            <option value="">Seçiniz</option>
                            <option value="Video">Video</option>
                            <option value="Müzik">Müzik</option>
                            <option value="Yazılım">Yazılım</option>
                            <option value="Diğer">Diğer</option>
                          </Field>
                        </div>
                      </div>
                    )}
                    {step === 1 && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="price">Ücret</Label>
                          <Field
                            id="price"
                            name="price"
                            placeholder="Örn. 45"
                            type="number"
                            component={Input}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="currency">Para Birimi</Label>
                          <Select
                            name="currency"
                            value={values.currency}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="TRY">TRY</SelectItem>
                              <SelectItem value="USD">USD</SelectItem>
                              <SelectItem value="EUR">EUR</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {/* <div>
                          <Label htmlFor="paymentMethod">Ödeme Yöntemi</Label>
                          <Select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={values.paymentMethod}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="creditCard">
                                Kredi Kartı
                              </SelectItem>
                              <SelectItem value="bankTransfer">
                                Banka Transferi
                              </SelectItem>
                              <SelectItem value="paypal">PayPal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div> */}
                      </div>
                    )}
                    {step === 2 && (
                      <div className="space-y-4">
                        <div>
                          <Label>Başlangıç Tarihi</Label>
                          <Field
                            id="startDate"
                            name="startDate"
                            type="date"
                            className="input" // Custom input class, if you have custom styling
                            component={Input}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Label>Yenileme Tarihi</Label>
                          <Field
                            id="renewalDate"
                            name="renewalDate"
                            type="date"
                            className="input" // Custom input class, if you have custom styling
                            component={Input}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Field
                            name="autoRenew"
                            render={ ({ field } : any
                            ) => (
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                id="auto-renew"
                              />
                            )}
                          />
                          <Label htmlFor="auto-renew">Otomatik Yenileme</Label>
                        </div>
                      </div>
                    )}
                    {step === 3 && <div className="space-y-4">sdfsdffdsf</div>}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-6 flex justify-between">
                {step > 0 && (
                  <Button type="button" onClick={prevStep} variant="outline">
                    Geri
                  </Button>
                )}
                {step < steps.length - 1 ? (
                  <Button type="button" onClick={nextStep} className="ml-auto">
                    İleri
                  </Button>
                ) : (
                  <Button className="ml-auto">Abonelik Ekle</Button>
                )}
              </div>
            </Form>
          </Card>
        )}
      </Formik>
    </div>
  );
}
