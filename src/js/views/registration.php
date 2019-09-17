<!--
 Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 The Universal Permissive License (UPL), Version 1.0
 -->
<div class="oj-hybrid-padding">
<div>
  <form method="post" action="registration.php">
  <oj-form-layout id="form-container" class="logincss">
    <!-- <oj-input-text id="input" required value="text" label-hint="Name"></oj-input-text> -->
 
    <oj-input-text id="input2" style="max-width:100%" type="text" required="" label-hint="Fullname" placeholder= "John Doe"></oj-input-text>
    <oj-input-text id="input2" style="max-width:100%" type="text" required="required" label-hint="Username"></oj-input-text>
    <oj-input-text id="input2" style="max-width:100%" type="email" label-hint="Email"></oj-input-text>
    <oj-input-text id="input2" style="max-width:100%" type="text" label-hint="Phone"></oj-input-text>
    <oj-input-password id="password" style="max-width:100%"  label-hint="Password"></oj-input-password>
    <oj-input-password id="password" style="max-width:100%"  label-hint="Comfirm Password"></oj-input-password>
    <oj-input-text id="input2" style="max-width:100%" type="text" label-hint="Location"></oj-input-text>
    <oj-input-text id="input2" style="max-width:100%" type="text" label-hint="Stack" placeholder="MERN, LAMP, PERN"></oj-input-text>
    <oj-button id='button1' on-oj-action='[[buttonClick]]'>Register</oj-button>
  </oj-form-layout>
</form>
</div>

</div>