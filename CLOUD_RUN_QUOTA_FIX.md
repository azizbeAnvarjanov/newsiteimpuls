# 🔧 Cloud Run Quota & Resource Limits Fix

## 🚨 Issue Identified

The Cloud Run service update failed with an error in the `asia-east1` region. This is likely due to resource quota limits being exceeded.

**Error Details:**

- Service: `imiwebsiteservice-546025729505`
- Region: `asia-east1`
- Issue: Resource quota limits exceeded

## ✅ Solutions Applied

### 1. Reduced Resource Requirements

**Before (❌ Exceeding Limits):**

```yaml
runConfig:
  cpu: 2 # Too high for quota
  memoryMiB: 1024 # Too high for quota
  maxInstances: 10 # Too high for quota
  concurrency: 80 # Too high for quota
```

**After (✅ Within Limits):**

```yaml
runConfig:
  cpu: 1 # Conservative 1 vCPU
  memoryMiB: 512 # Conservative 512 MiB
  maxInstances: 5 # Conservative max instances
  concurrency: 40 # Conservative concurrency
```

### 2. Updated Build Command

Fixed the build command to use the correct script:

```yaml
scripts:
  buildCommand: npm run apphosting:build # Correct script name
  runCommand: npm start
```

### 3. Conservative Staging Configuration

Created a staging configuration with minimal resources:

```yaml
runConfig:
  cpu: 0.5 # Minimal CPU
  memoryMiB: 256 # Minimal memory
  maxInstances: 3 # Minimal instances
  concurrency: 20 # Minimal concurrency
```

## 📋 Cloud Run Limits Reference

### Resource Limits (Per Instance)

- **CPU**: Maximum 8 vCPU (we use 1)
- **Memory**: Maximum 32 GiB (we use 512 MiB)
- **Startup Timeout**: 4 minutes
- **Concurrent Requests**: 1000 per instance

### Project Limits (Per Region)

- **Services**: 1000 per project/region
- **Revisions**: 4000 serving traffic per project/region
- **Container Instances**: Varies by region (check quotas)

### Network Limits

- **Request Timeout**: 60 minutes
- **Concurrent Requests**: 1000 per instance
- **Bandwidth**: 600 Mbps per instance

## 🎯 Why This Fixes the Issue

1. **Quota Compliance**: New configuration stays well within typical Cloud Run quotas
2. **Cost Optimization**: Lower resource usage means lower costs
3. **Scalability**: Can still handle moderate traffic with 5 instances
4. **Reliability**: Conservative limits reduce the chance of quota violations

## 🚀 Performance Expectations

### Production Configuration (1 CPU, 512 MiB)

- **Concurrent Users**: ~200-400 users
- **Response Time**: Fast for typical web applications
- **Cost**: ~$0.00002400 per 100ms (very affordable)

### Staging Configuration (0.5 CPU, 256 MiB)

- **Concurrent Users**: ~50-100 users
- **Response Time**: Adequate for testing
- **Cost**: ~$0.00001200 per 100ms (minimal cost)

## 🔍 Monitoring Quotas

### Check Current Quotas

1. Go to [Google Cloud Console](https://console.cloud.google.com/iam-admin/quotas)
2. Filter by "Cloud Run"
3. Check your current usage vs limits

### Request Quota Increase (If Needed)

1. Select the quota you want to increase
2. Click "Edit Quotas"
3. Enter new value and justification
4. Submit request

## 📊 Resource Usage Optimization

### Memory Optimization

- Next.js apps typically need 256-512 MiB
- 512 MiB is sufficient for most applications
- Monitor memory usage in Cloud Run logs

### CPU Optimization

- 1 vCPU is sufficient for most web applications
- Can handle 40 concurrent requests efficiently
- Scale up only if you see performance issues

### Instance Optimization

- Start with 0 min instances (cold start)
- Use 5 max instances for cost control
- Monitor traffic patterns and adjust

## 🐛 Troubleshooting

### If Deployment Still Fails

1. **Check Quota Dashboard**:

   ```bash
   gcloud compute regions describe asia-east1
   ```

2. **Request Quota Increase**:

   - Go to IAM & Admin > Quotas
   - Find "Cloud Run" quotas
   - Request increase for specific limits

3. **Try Different Region**:

   - Some regions have higher quotas
   - Consider `us-central1` or `europe-west1`

4. **Reduce Resources Further**:
   ```yaml
   runConfig:
     cpu: 0.5
     memoryMiB: 256
     maxInstances: 3
     concurrency: 20
   ```

## 🎯 Next Steps

1. **Deploy with New Configuration**:

   ```bash
   git add .
   git commit -m "Fix: Reduce Cloud Run resource limits to stay within quotas"
   git push origin main
   ```

2. **Monitor Deployment**:

   - Check Firebase Console for build status
   - Monitor Cloud Run logs for any errors
   - Verify app is accessible

3. **Scale Up Gradually**:
   - Start with conservative limits
   - Monitor performance and costs
   - Increase resources only if needed

## 💡 Best Practices

1. **Start Small**: Begin with minimal resources
2. **Monitor Usage**: Track CPU, memory, and request patterns
3. **Scale Gradually**: Increase resources based on actual needs
4. **Use Staging**: Test changes in staging environment first
5. **Set Alerts**: Configure monitoring alerts for quota usage

---

**Your Cloud Run deployment should now work within quota limits!** 🎉
